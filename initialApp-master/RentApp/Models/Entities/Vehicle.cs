﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RentApp.Models.Entities
{
    public class Vehicle
    {
        public int Id { get; set; }
        public TypeOfVehicle Type { get; set; }
        public string Model { get; set; }
        public string Manufactor { get; set; }
        public DateTime? Year { get; set; }
        public string Description { get; set; }   
        public decimal PricePerHour { get; set; }
        public bool Unvailable { get; set; }

        public List<string> Images { get; set; }
    }
}