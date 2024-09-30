<?php

namespace App\Http\Controllers;

use App\Models\ticket;
use App\Http\Requests\StoreticketRequest;
use App\Http\Requests\UpdateticketRequest;
use Illuminate\Http\Request;
use Midtrans\Config;
use Midtrans\Snap;

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
        \Midtrans\Config::$isProduction = true;
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
            ]);

            $nama  = $request->input('nama');
            $nim = $request->input('nim');
            $angkatan = $request->input('angkatan');

            if ($angkatan == '2024') {

                $params = array(
                    'transaction_details' => array(
                        'order_id' => rand(), // Use uniqid() for a unique order ID
                        'gross_amount' => 15000
                    ),
                    'customer_details' => array(
                        'nama' => $nama,
                        'nim' => $nim,
                        'angkatan' => $angkatan,
                    ),
                );

                // return response()->json(['message' => 'Angkatan 2024', 'params' => $params]);

            } else {

                $params = array(
                    'transaction_details' => array(
                        'order_id' => rand(), // Use uniqid() for a unique order ID
                        'gross_amount' => 20000
                    ),
                    'customer_details' => array(
                        'nama' => $nama,
                        'nim' => $nim,
                        'angkatan' => $angkatan,
                    ),
                );

                // return response()->json(['message' => 'Angkatan lainnya', 'params' => $params]);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error: ' . $e->getMessage()], 500);
        }

        $snapToken = \Midtrans\Snap::getSnapToken($params);

        return response()->json($snapToken);
    }
}
