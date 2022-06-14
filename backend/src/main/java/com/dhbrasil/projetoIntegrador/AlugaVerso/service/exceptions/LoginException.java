package com.dhbrasil.projetoIntegrador.AlugaVerso.service.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FORBIDDEN)
public class LoginException extends RuntimeException{

    public LoginException(String message) {
        super(message);
    }
}
