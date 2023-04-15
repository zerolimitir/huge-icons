import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgIdea = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.7 8.316c-.393.181-.559.609-.383.984.047.101.416.5.999 1.08l.924.919V18H7.988l.026.33a4.088 4.088 0 0 0 1.406 2.722 3.997 3.997 0 0 0 5.16 0 4.11 4.11 0 0 0 1.408-2.742l.024-.31H12.76v-6.697l.976-.981c1.062-1.067 1.059-1.063 1.013-1.467-.023-.211-.18-.429-.389-.541-.154-.082-.453-.097-.627-.031-.062.023-.478.405-.923.849l-.811.806-.789-.787c-.505-.503-.844-.81-.939-.85a.668.668 0 0 0-.571.015'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgIdea);
export default ForwardRef;
