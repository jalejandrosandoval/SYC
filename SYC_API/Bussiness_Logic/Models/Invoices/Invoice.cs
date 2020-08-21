using Bussiness_Logic.Models.Clients;
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
    public class Invoice
    {
        [Key]
        public int Id_Factura { get; set; }

        [Required]
        public int Client_NDoc { get; set; }

        public ICollection<Client> Clients{ get; set; }

        [Required]
        public int CodeStatus { get; set; }

        [Required]
        public ICollection<Invoice_Status> Statuses { get; set; }

        [Required(ErrorMessage = "* Valor Requerido...")]
        [DataType(DataType.Currency)]
        [StringLength(18, ErrorMessage = "No puede exceder 18 digitos")]
        [RegularExpression("([0-9]+)", ErrorMessage = "* Valor Incorrecto...")]
        [Display(Name = "Valor", Description = "Valor", Prompt = "Valor...")]
        public int Valor { get; set; }

        [Required(ErrorMessage = "* Fecha Factura Requerida...")]
        [DataType(DataType.Date)]
        public DateTime FechaFac { get; set; }

    }
}
