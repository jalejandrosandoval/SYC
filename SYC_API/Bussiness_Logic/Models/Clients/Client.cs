using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Bussiness_Logic.Models.Clients
{
    [Serializable]
    public class Client
    {
        [Key]
        public int Id_Client { get; set; }

        [Required(ErrorMessage = "* Numero de Documento Requerido...")]
        [RegularExpression("([0-9]+)", ErrorMessage = "* Numero de Documento Incorrecto...")]
        [Display(Name = "Numero de Documento", Description = "Numero de Documento", Prompt = "ValNumero de Documentoor...")]
        public int NumeroDoc { get; set; }

        [Required(ErrorMessage = "* Nombre Requerido...")]
        [StringLength(200, ErrorMessage = "No puede exceder 200 caracteres")]
        [Display(Name = "Nombre", Description = "Nombre", Prompt = "Nombre...")]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "* Direccion Requerida...")]
        [StringLength(200, ErrorMessage = "No puede exceder 200 caracteres")]
        [Display(Name = "Direccion", Description = "Direccion", Prompt = "Direccion...")]
        public string Direccion { get; set; }

    }
}
