import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGpsCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 1.278a.883.883 0 0 0-.481.374c-.061.112-.072.273-.082 1.258-.007.621-.025 1.13-.04 1.13-.016 0-.207.027-.426.06a7.975 7.975 0 0 0-3.779 1.662c-.424.341-1.045.968-1.329 1.338a8.323 8.323 0 0 0-1.618 3.927l-.026.208-1.128.012-1.128.013-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.097.027.565.045 1.204.045H4.03l.026.21a8.093 8.093 0 0 0 3.633 5.766c.927.604 2.207 1.066 3.341 1.208l.21.026v1.045c0 .639.018 1.107.045 1.204.059.213.293.441.513.5.4.108.812-.12.92-.51.024-.085.042-.599.042-1.194V19.97l.21-.026a8.047 8.047 0 0 0 6.23-4.473 8.413 8.413 0 0 0 .744-2.501l.026-.21h1.045c.639 0 1.107-.018 1.204-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.128-.013-1.128-.012-.026-.208c-.443-3.542-3.216-6.397-6.726-6.927-.219-.033-.41-.06-.426-.06-.015 0-.033-.509-.04-1.13-.011-1.054-.017-1.139-.094-1.269a.807.807 0 0 0-.847-.363m.945 7.819c.337.092.839.35 1.117.574C14.554 10.219 15 11.14 15 12c0 1.17-.775 2.329-1.849 2.766-1.509.614-3.162-.032-3.853-1.506-.226-.481-.277-.714-.277-1.26s.051-.779.277-1.26a3.033 3.033 0 0 1 2.205-1.7c.267-.049.988-.016 1.253.057'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGpsCircle);
export default ForwardRef;
