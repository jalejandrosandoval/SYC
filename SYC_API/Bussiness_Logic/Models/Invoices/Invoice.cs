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
        public int NumeroDoc { get; set; }

        [Required]
        public int Client_NDoc { get; set; }

        public ICollection<Client> Clients{ get; set; }

        [Required]
        public int CodeStatus { get; set; }

        public ICollection<Invoice_Status> Statuses { get; set; }


        [Required(ErrorMessage = "* Número de Identifiació Requerido...")]
        [DataType(DataType.Currency)]
        [StringLength(18, ErrorMessage = "No puede exceder 10 digitos")]
        [RegularExpression("([0-9]+)", ErrorMessage = "* No. Identificación Incorrecto...")]
        [Display(Name = "Número Documento", Description = "Número de Documento", Prompt = "Número de Identificación...")]
        public string Valor { get; set; }

        [Required(ErrorMessage = "* Fecha Factura Requerida...")]
        [DataType(DataType.Date)]
        public DateTime FechaFac { get; set; }

    }
}
