using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Bussiness_Logic.Models.Clients
{
    /// <summary>
    /// 
    /// </summary>
    
    [Serializable]
    public class Client
    {
        [Key]
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
