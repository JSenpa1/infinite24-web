<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pos1 extends Model
{
    use HasFactory;

    protected $table = 'pos1';

    public $timestamps = false;

    protected $fillable = [
        'id',
        'soal',
        'jawaban',
    ];
}
