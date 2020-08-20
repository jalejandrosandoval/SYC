using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Bussiness_Logic.Models.Invoices
{
    /// <summary>
    /// 
    /// </summary>

    [Serializable]

    public class Invoice_Status
    {
        [Key]
        public int CodeStatus { get; set; }

        [StringLength(20, ErrorMessage = "No puede exceder 20 caracteres")]
        [Display(Name = "Descripción", Description = "Descripción", Prompt = "Descripción...")]

        public string Description { get; set; }

    }
}
