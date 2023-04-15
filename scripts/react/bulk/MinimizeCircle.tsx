import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMinimizeCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M20.72 2.303c-.092.039-1.84 1.759-5.05 4.968l-4.91 4.909v-1.651c0-1.4-.009-1.674-.062-1.8A.745.745 0 0 0 9.316 8.7c-.07.15-.074.318-.074 2.8 0 2.482.004 2.65.074 2.8a.734.734 0 0 0 .413.398c.129.054.494.062 2.78.061 2.472-.001 2.641-.005 2.791-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.147-.068-.292-.074-1.82-.075l-1.66-.001 4.906-4.91c2.699-2.701 4.935-4.968 4.97-5.038.127-.254.048-.673-.162-.857a.781.781 0 0 0-.814-.132'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMinimizeCircle);
export default ForwardRef;
