import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDeliveryAirPlane = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.7 4.316a.745.745 0 0 0 .029 1.382c.122.051.348.062 1.271.062 1.201 0 1.299-.014 1.515-.212.401-.369.272-1.03-.244-1.246-.122-.051-.348-.062-1.28-.061-1.014.001-1.148.008-1.291.075m-7.953 9.746c-.295.095-.601.413-.688.714-.044.152-.06.299-.044.412.027.199 1.522 4.128 1.73 4.544.563 1.134 1.553 1.89 2.855 2.181.275.061.895.067 7.3.067h7l.251-.116c.548-.253.893-.83.834-1.398-.049-.477-.169-.644-1.156-1.609-.489-.477-1.015-.958-1.169-1.068a4.874 4.874 0 0 0-1.409-.66l-.391-.107-5.1-.024c-3.832-.017-5.145-.035-5.28-.072-.642-.174-1.215-.435-1.62-.736-.132-.098-.66-.588-1.173-1.088-.666-.649-.985-.932-1.115-.99a1.274 1.274 0 0 0-.825-.05'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDeliveryAirPlane);
export default ForwardRef;
