<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TesEmail extends Model
{
    use HasFactory;

    protected $table = 'tesEmail';

    public $timestamps = false;

    protected $fillable = [
        'id',
        'nama',
        'nim',
        'tes'
    ];
}
