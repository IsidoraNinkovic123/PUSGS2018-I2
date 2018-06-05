﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace RentApp.Models.Entities
{
    public class Vehicle
    {
        public int Id { get; set; }       
        public string Model { get; set; }
        public string Manufactor { get; set; }
        public DateTime? Year { get; set; }
        public string Description { get; set; }   
        public decimal PricePerHour { get; set; }
        public bool Unvailable { get; set; }

       
        public virtual List<string> Images { get; set; }

        public int TypeId { get; set; }
        [ForeignKey("TypeId")]
        public virtual  TypeOfVehicle Type { get; set; }

    }
}