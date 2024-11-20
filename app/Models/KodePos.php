<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KodePos extends Model
{
    use HasFactory;

    protected $table = 'kodepos';

    public $timestamps = false;

    protected $fillable = [
        'id',
        'kode_awal',
        'kode_akhir',
    ];
}
