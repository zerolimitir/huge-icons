import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPortraitLineCenter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.811 11.279a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.107.03.848.044 2.259.044 1.956-.001 2.111-.006 2.26-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.149-.069-.299-.074-2.26-.071-1.155.002-2.158.017-2.229.034m13.889.036a.746.746 0 0 0 .029 1.383c.128.053.442.062 2.24.062 1.402 0 2.143-.015 2.25-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.183-.01c-2.06-.009-2.192-.006-2.343.065'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPortraitLineCenter);
export default ForwardRef;
