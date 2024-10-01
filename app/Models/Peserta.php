<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peserta extends Model
{
    use HasFactory;

    protected $table = 'peserta';

    public $timestamps = false;

    protected $fillable = [
        'id',
        'nama',
        'nim',
        'angkatan',
        'email',
        'regis_ulang'
    ];
}
