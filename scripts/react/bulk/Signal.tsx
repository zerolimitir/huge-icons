import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSignal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.604 8.043c-.835.164-1.524 1.006-1.524 1.863 0 .544.154.881.738 1.616l.422.53v3.952c0 2.735.014 4.016.044 4.158.163.758 1.269.758 1.432 0 .03-.142.044-1.423.044-4.158v-3.952l.422-.53c.231-.292.472-.632.535-.756.708-1.411-.548-3.03-2.113-2.723'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignal);
export default ForwardRef;
