import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLogoutOpen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11 5.277v.763h3.307l.244.122c.415.207.632.529.687 1.02.043.384.175.618.414.734.389.188.803.056 1.001-.319.107-.202.113-.238.09-.529-.09-1.116-.821-2.038-1.923-2.426-.279-.098-.289-.099-2.05-.113L11 4.515v.762m6.66 4.03a.734.734 0 0 0-.42.673c0 .264.104.431.538.86l.384.38-2.694.02-2.694.02-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.108.031.991.045 2.778.045h2.62l-.406.41c-.454.46-.533.585-.533.85 0 .55.555.898 1.06.664.101-.047.452-.369.949-.872.683-.691.806-.835.92-1.075.124-.263.131-.3.131-.737s-.007-.474-.131-.737c-.114-.24-.237-.384-.92-1.075-.497-.503-.848-.825-.949-.872-.195-.091-.478-.095-.64-.009m-1.94 7.277c-.305.132-.436.338-.483.761-.055.493-.316.87-.737 1.063-.197.091-.225.092-1.85.104l-1.65.011v1.525l1.69-.019c1.901-.021 1.958-.028 2.55-.319.27-.132.411-.237.685-.51.293-.291.373-.402.526-.722.261-.547.37-1.113.271-1.413-.14-.424-.611-.651-1.002-.481'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLogoutOpen);
export default ForwardRef;
