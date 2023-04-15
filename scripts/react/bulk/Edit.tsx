import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgEdit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.316 8.79c-3.654 3.663-3.568 3.568-3.731 4.124-.035.117-.183 1.053-.33 2.08-.242 1.689-.263 1.887-.221 2.085.09.432.455.797.887.887.198.042.396.021 2.085-.221 1.027-.147 1.963-.295 2.08-.33.556-.163.459-.075 4.145-3.752l3.451-3.443-.241-.028c-1.654-.189-3.537-1.7-4.291-3.444-.172-.397-.35-1.036-.35-1.253 0-.074-.014-.135-.031-.135s-1.57 1.544-3.453 3.43'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEdit);
export default ForwardRef;
