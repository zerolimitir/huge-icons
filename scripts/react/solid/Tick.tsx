import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTick = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.807 6.279a.822.822 0 0 0-.27.147c-.076.063-1.885 2.058-4.021 4.434-2.136 2.376-3.957 4.37-4.047 4.43-.182.124-.5.23-.689.23-.177 0-.538-.113-.68-.213-.066-.047-.924-.727-1.906-1.513-.983-.785-1.828-1.45-1.88-1.477a.886.886 0 0 0-.313-.053c-.27-.004-.476.109-.633.347a.774.774 0 0 0-.027.745c.125.216 3.831 3.165 4.225 3.362.443.222.823.298 1.35.271.689-.036 1.218-.257 1.696-.707.327-.307 7.929-8.746 8.046-8.931.11-.175.11-.521-.001-.711a.805.805 0 0 0-.85-.361'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTick);
export default ForwardRef;
