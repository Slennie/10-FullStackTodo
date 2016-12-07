using System;
using System.Collections.Generic;
using System.Data.Entity;
using Todo.Api.Models;
using System.Linq;
using System.Web;

namespace Todo.Api.infrastructure
{
    public class TodoDataContext : DbContext
    {
        public TodoDataContext() : base("todo")
        {

        }

        public IDbSet<TodoItem> TodoItems { get; set; }
                
    }
}