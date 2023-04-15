import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapLocationAccordion = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.711 2.062c-1.86.29-3.352 1.713-3.694 3.523-.086.459-.058 1.309.06 1.851.336 1.529 1.22 3.21 2.239 4.257 1.275 1.31 2.448 1.48 3.703.537 1.314-.987 2.55-3.169 2.88-5.085.078-.453.078-1.165.001-1.575-.444-2.339-2.737-3.89-5.189-3.508M13.1 4.841c.267.13.523.393.652.671.086.186.106.288.107.549.001.283-.014.352-.131.588a1.354 1.354 0 0 1-2.437-.003c-.096-.196-.111-.274-.111-.586 0-.313.015-.39.112-.588.137-.279.437-.559.72-.67.295-.116.807-.098 1.088.039M8.76 15.418v3.422h.095c.164 0 .837.186 1.14.315.476.203 1 .533 1.836 1.159 1.014.759 1.447 1.048 1.925 1.288.401.201.912.368 1.274.417l.21.029V13l-.32.253c-1.471 1.163-3.07 1.243-4.607.229-.331-.218-1.046-.878-1.36-1.254l-.193-.232v3.422'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapLocationAccordion);
export default ForwardRef;
