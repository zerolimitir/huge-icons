import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBatteryHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M4.66 5.279c-1.088.129-2 .913-2.308 1.981l-.092.32v8.84l.092.32a2.797 2.797 0 0 0 1.908 1.908l.32.092h14.84l.32-.092a2.797 2.797 0 0 0 1.908-1.908l.092-.32V7.58l-.092-.32a2.822 2.822 0 0 0-1.888-1.907l-.3-.092-7.28-.005c-4.004-.004-7.388.007-7.52.023m14.794 1.562c.29.109.596.415.705.705.08.213.081.294.081 4.454s-.001 4.241-.081 4.454c-.109.29-.415.596-.705.705-.215.08-.28.081-7.454.081-7.174 0-7.239-.001-7.454-.081a1.341 1.341 0 0 1-.706-.707c-.08-.216-.081-.27-.071-4.525L3.78 7.62l.087-.162c.157-.293.484-.573.773-.661.055-.016 3.362-.032 7.348-.034 7.19-.003 7.251-.002 7.466.078m3.361 2.436a.8.8 0 0 0-.462.354l-.093.149v4.44l.093.149c.357.574 1.223.443 1.363-.207.058-.271.059-4.069.001-4.321a.747.747 0 0 0-.902-.564'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBatteryHorizontal);
export default ForwardRef;