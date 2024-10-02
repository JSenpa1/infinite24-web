<?php

namespace App\Http\Controllers;

use App\Models\ticket;
use App\Http\Requests\StoreticketRequest;
use App\Http\Requests\UpdateticketRequest;
use Illuminate\Http\Request;
use Midtrans\Config;
use Midtrans\Snap;
use App\Models\Order;

class TicketController extends Controller
{
    public function __construct()
    {

    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreticketRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ticket $ticket)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ticket $ticket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateticketRequest $request, ticket $ticket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ticket $ticket)
    {
        //
    }

    public function midTrans(Request $request) {

        // Config::$serverKey = "SB-Mid-server-i4rx8lRKO0S7IK7Y_i3JhIMe";
        // Config::$isProduction = "false";
        // Config::$isSanitized = "true";
        // Config::$is3ds = "true";

        // Set your Merchant Server Key

        \Midtrans\Config::$serverKey = config('midtrans.serverKey');
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;

        try {
            // Validate input
            $request->validate([
                'nama' => 'required|string',
                'nim' => 'required|string',
                'angkatan' => 'required|string',
                'email' => 'required|string'
            ]);
    
            $nama  = $request->input('nama');
            $nim = $request->input('nim');
            $angkatan = $request->input('angkatan');
            $email = $request->input('email');
    
            // Determine gross amount based on angkatan
            $grossAmount = $angkatan == '2024' ? 15000 : 20000;
    
            // Prepare params for Midtrans
            $params = array(
                'transaction_details' => array(
                    'order_id' => uniqid(), // Use uniqid() for a unique order ID
                    'gross_amount' => $grossAmount
                ),
                'customer_details' => array(
                    'nama' => $nama,
                    'nim' => $nim,
                    'angkatan' => $angkatan,
                    'email' => $email
                ),
            );
    
            // Create the order in the database
            $order = Order::create([
                'nama' => $nama,
                'nim' => $nim,
                'angkatan' => $angkatan,
                'total_price' => $grossAmount,
                'status' => 'unpaid', // Default status
            ]);
    
            // Get the Snap token
            $snapToken = \Midtrans\Snap::getSnapToken($params);
    
            return response()->json($snapToken);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error: ' . $e->getMessage()], 500);
        }
    }

    public function callBack(Request $request) {
        $serverKey = config('midtrans.serverKey');
        $hashed = hash("sha512", $request->order_id.$request->status_code.$request->gross_amount.$serverKey);

        if(hashed == $request->signature_key) {
            if($request->transaction_status == 'settlement')
            {
                $order = Order::find($request->order_id);
                $order->update(['status' => 'paid']);
            }
        }
    }

}
