import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAlignRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 5.278a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.223.062 6.215.062 6.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-3.143-.006c-1.729-.004-3.201.007-3.272.024m-.004 8.009a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.287.061 6.037.061 6.324 0 .758-.163.758-1.269 0-1.432-.263-.056-6.101-.054-6.355.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAlignRight);
export default ForwardRef;
