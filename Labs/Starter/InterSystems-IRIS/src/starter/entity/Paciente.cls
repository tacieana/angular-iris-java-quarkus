Class starter.entity.Paciente Extends %Persistent
{

Property Id As %Integer [ Identity, Required ];

Property Nome As %VarString [ Required ];

Property Cpf As %VarString;

Property DataNascimento As %Date;

Index Id On Id [ PrimaryKey ];

Storage Default
{
<Data name="PacienteDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Nome</Value>
</Value>
<Value name="3">
<Value>Cpf</Value>
</Value>
<Value name="4">
<Value>DataNascimento</Value>
</Value>
</Data>
<DataLocation>^starter.entity.PacienteD</DataLocation>
<DefaultData>PacienteDefaultData</DefaultData>
<IdLocation>^starter.entity.PacienteD</IdLocation>
<IndexLocation>^starter.entity.PacienteI</IndexLocation>
<StreamLocation>^starter.entity.PacienteS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
