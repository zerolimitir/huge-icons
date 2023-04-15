import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFeather = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.822 11.22c-.126.045-1.198 1.095-5.294 5.188-3.552 3.549-5.159 5.181-5.211 5.292a.74.74 0 0 0 .933 1.006c.138-.053 1.138-1.034 5.337-5.236 4.69-4.693 5.171-5.186 5.213-5.343a.754.754 0 0 0-.407-.863c-.235-.117-.343-.125-.571-.044'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFeather);
export default ForwardRef;
