import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFacebookSquare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.68 7.078c-1.498.321-2.665 1.441-3.067 2.943-.102.384-.107.446-.123 1.689L10.473 13H7v3h3.48v6h3.04v-6H17v-3h-3.48v-2.226l.11-.217a.962.962 0 0 1 .65-.513c.123-.027.704-.044 1.462-.044H17V7l-1.49.003c-1.282.002-1.538.013-1.83.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFacebookSquare);
export default ForwardRef;
