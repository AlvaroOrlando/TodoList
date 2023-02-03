import { ImgHTMLAttributes } from 'react';
 

export function LogoImg({...props}:ImgHTMLAttributes <HTMLImageElement>){
    return (
        <img 
          {...props} 
        />
    )
}