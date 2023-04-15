import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowUpCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 7.317c-.235.109-3.366 3.261-3.401 3.423a9.274 9.274 0 0 1-.043.183c-.031.117.1.449.231.585a.8.8 0 0 0 .334.194c.179.052.226.052.399 0 .175-.053.297-.159 1.108-.97l.912-.911.001 3.159c.001 2.987.005 3.169.075 3.32a.743.743 0 0 0 1.368 0c.07-.151.074-.333.075-3.319l.001-3.159.95.945c.898.893.961.947 1.146.985a.751.751 0 0 0 .886-.533c.052-.178.052-.226-.001-.401-.054-.182-.189-.328-1.69-1.827-1.112-1.11-1.678-1.648-1.78-1.69a.661.661 0 0 0-.571.016'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowUpCircle);
export default ForwardRef;
