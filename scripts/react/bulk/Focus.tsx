import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFocus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.5 7.025a5.018 5.018 0 0 0-3.024 1.451c-1.705 1.705-1.95 4.324-.595 6.348.267.399.888 1.023 1.279 1.284.587.393 1.19.648 1.882.795.468.1 1.448.1 1.916 0 1.024-.218 1.846-.66 2.566-1.379.719-.72 1.161-1.542 1.379-2.566.1-.468.1-1.448 0-1.916-.218-1.024-.66-1.846-1.379-2.566a4.882 4.882 0 0 0-2.484-1.359c-.335-.075-1.214-.127-1.54-.092'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFocus);
export default ForwardRef;
