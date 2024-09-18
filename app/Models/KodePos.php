<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KodePos extends Model
{
    use HasFactory;

    protected $table = 'KodePos';

    public $timestamps = false;

    protected $fillable = [
        'id',
        'kode',
    ];
}
