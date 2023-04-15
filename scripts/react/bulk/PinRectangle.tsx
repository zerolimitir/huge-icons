import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPinRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.68 3.024a2.677 2.677 0 0 0-.787.323c-.354.234-.604.554-.773.993-.124.319-.136.932-.024 1.26.164.484.504.901.934 1.142l.21.118v4.548c0 3.17.013 4.611.044 4.754.163.758 1.269.758 1.432 0 .031-.143.044-1.584.044-4.754V6.86l.21-.118c.43-.241.77-.658.934-1.142.111-.327.1-.94-.023-1.26-.304-.791-.967-1.283-1.779-1.32a2.958 2.958 0 0 0-.422.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPinRectangle);
export default ForwardRef;
