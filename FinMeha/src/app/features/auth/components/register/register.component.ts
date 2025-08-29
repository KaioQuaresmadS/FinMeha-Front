import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { response } from 'express';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm : FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService){
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  onSubmit() :void{
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.value).subscribe((response)=> {
        // Este bloco recebe o "sinal" da API
        console.log("Registro bem-sucedido!", response);

        if(response && response.token){
          //Armazena o token na variável local do navegador
          localStorage.setItem('auth_token', response.token);
          console.log('Token armazenado:', response.token);
          //Você pode adicionar uma navegação para outra página aqui
        }
      },
      (error) => {
        //Esse bloco lida com erros da API
        console.error('Erro no registro!', error);
        // Mostre uma mensagem de erro ao usuário
      }
    )}
  }
}
