import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUserRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.765.52-1.321 1.303-1.601 2.256l-.109.372-.011 6.51c-.012 6.467-.011 6.512.072 6.92.33 1.621 1.528 2.818 3.153 3.149.39.079.526.081 6.765.081s6.375-.002 6.765-.081c1.627-.332 2.823-1.528 3.155-3.157.08-.396.081-.489.071-6.892l-.011-6.49-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028m7.323 4.054c.337.092.839.35 1.117.574C14.554 7.219 15 8.14 15 9c0 1.17-.775 2.329-1.849 2.766-1.509.614-3.162-.032-3.853-1.506-.226-.481-.277-.714-.277-1.26s.051-.779.277-1.26a3.033 3.033 0 0 1 2.205-1.7c.267-.049.988-.016 1.253.057m.342 8.004c1.742.313 3.193 1.401 3.688 2.763.149.412.111.635-.151.884-.278.264-.055.252-4.633.252-4.669 0-4.384.018-4.677-.299-.262-.285-.263-.537-.003-1.096.486-1.045 1.537-1.903 2.843-2.319a7.59 7.59 0 0 1 1.275-.262c.278-.034 1.308.014 1.658.077'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserRectangle);
export default ForwardRef;