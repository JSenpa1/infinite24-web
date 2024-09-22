<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Problem extends Model
{
    use HasFactory;

    protected $table = 'problems';
    protected $primaryKey = 'id';

    protected $fillable = [
        'answer',
        'image',
    ];
}
