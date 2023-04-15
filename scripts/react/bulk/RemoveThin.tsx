import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRemoveThin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.46 7.107a.696.696 0 0 0-.344.341.787.787 0 0 0 .001.664c.044.084 1.954 2.021 4.41 4.473 4.102 4.094 4.343 4.327 4.52 4.37a.738.738 0 0 0 .909-.903c-.044-.184-.232-.378-4.371-4.523C9.65 8.59 8.208 7.173 8.097 7.119c-.194-.094-.471-.1-.637-.012'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRemoveThin);
export default ForwardRef;
