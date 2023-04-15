import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTickDouble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M21.813 6.288a.773.773 0 0 0-.328.184c-.088.081-1.882 2.065-3.986 4.408-2.104 2.343-3.907 4.319-4.007 4.39a1.218 1.218 0 0 1-1.224.129c-.092-.044-.978-.728-1.968-1.522-.99-.793-1.861-1.48-1.936-1.526-.212-.133-.559-.118-.772.032a.76.76 0 0 0-.253.951c.079.165.205.27 2.6 2.179 1.003.799 1.398 1.09 1.641 1.207.997.483 2.205.318 3.005-.41.177-.161 7.102-7.821 7.922-8.763.523-.601.07-1.424-.694-1.259'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTickDouble);
export default ForwardRef;
