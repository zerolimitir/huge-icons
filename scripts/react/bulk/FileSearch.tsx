import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileSearch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.88 5.3c-1.745.351-2.914 2.065-2.584 3.786.064.331.223.778.35.983l.085.138-.703.706c-.491.494-.71.743-.729.827a5.215 5.215 0 0 1-.043.183c-.031.117.1.449.231.585a.8.8 0 0 0 .334.194c.179.052.226.052.399 0 .171-.051.285-.147.884-.746l.688-.687.138.085c.37.228 1.059.406 1.575.406 2.005 0 3.575-1.888 3.199-3.846-.341-1.775-2.081-2.965-3.824-2.614m.965 1.501a1.7 1.7 0 0 1 .878.476 1.72 1.72 0 0 1 0 2.446 1.72 1.72 0 0 1-2.446 0 1.72 1.72 0 0 1 0-2.446 1.693 1.693 0 0 1 1.568-.476m3.395 7.261c-1.648.352-2.85 1.562-3.178 3.2-.055.273-.062.634-.053 2.528L13.02 22l4-4 4-4-2.26.003c-1.768.003-2.317.015-2.52.059'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileSearch);
export default ForwardRef;
