import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFlashAuto = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.34 1.277a.688.688 0 0 0-.387.23c-.109.116-2.601 6.033-2.67 6.34-.12.535.373 1.002.915.864.259-.065.435-.267.607-.692.08-.197.23-.561.334-.809l.189-.45h2.339l.044.096c.024.052.172.407.33.787.158.38.324.742.37.804.186.251.581.338.894.196a.675.675 0 0 0 .407-.603c.017-.229-.003-.281-1.271-3.326-.858-2.061-1.323-3.132-1.394-3.208a.748.748 0 0 0-.707-.229m.434 3.325.258.618-.254.012c-.14.006-.379.006-.532 0l-.277-.012.261-.631c.144-.346.268-.625.275-.618.006.007.128.291.269.631'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlashAuto);
export default ForwardRef;
