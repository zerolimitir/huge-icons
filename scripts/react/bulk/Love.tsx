import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.849 5.761c-.368.082-.635.436-.6.797.04.413.318.651.838.715.37.046.663.193.857.429.18.22.245.388.29.751.046.369.148.55.391.692a.75.75 0 0 0 1.046-.305c.087-.162.095-.213.075-.52a2.777 2.777 0 0 0-.336-1.16c-.2-.365-.748-.901-1.112-1.09-.457-.237-1.129-.38-1.449-.309'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLove);
export default ForwardRef;
