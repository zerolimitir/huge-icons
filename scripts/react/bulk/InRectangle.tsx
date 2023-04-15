import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgInRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 8.317c-.224.105-3.314 3.207-3.399 3.412a.661.661 0 0 0 .016.571c.049.107.62.702 1.709 1.786 1.575 1.568 1.641 1.628 1.83 1.666a.751.751 0 0 0 .886-.533c.052-.179.052-.226 0-.399-.053-.175-.161-.298-.99-1.128l-.931-.932h5.067c3.55 0 5.13-.013 5.274-.044.758-.163.758-1.269 0-1.432-.144-.031-1.724-.044-5.274-.044h-5.067l.908-.91c.59-.591.93-.962.97-1.059a.668.668 0 0 0-.015-.571c-.181-.393-.609-.559-.984-.383'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInRectangle);
export default ForwardRef;
