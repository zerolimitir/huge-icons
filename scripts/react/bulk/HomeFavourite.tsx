import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.626 11.101a2.254 2.254 0 0 0-1.567 1.471 2.216 2.216 0 0 0 .237 1.841c.075.114.718.787 1.43 1.495 1.414 1.407 1.471 1.451 2.014 1.541.336.055.712-.004 1.038-.166.204-.1.449-.327 1.564-1.451 1.426-1.437 1.477-1.502 1.619-2.055.099-.389.1-.643.002-1.027-.115-.447-.257-.693-.599-1.034-.461-.46-.938-.654-1.584-.645-.57.008-1.026.204-1.51.648l-.271.249-.246-.228c-.328-.304-.599-.477-.913-.582-.335-.113-.89-.139-1.214-.057'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeFavourite);
export default ForwardRef;
