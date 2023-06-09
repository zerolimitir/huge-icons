import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVibrateMode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.66 4.278c-1.092.134-2 .914-2.308 1.982l-.092.32v10.84l.092.32a2.797 2.797 0 0 0 1.908 1.908c.318.092.332.092 2.74.092 2.408 0 2.422 0 2.74-.092a2.797 2.797 0 0 0 1.908-1.908l.092-.32V6.58l-.092-.32a2.813 2.813 0 0 0-1.888-1.905c-.294-.088-.347-.09-2.58-.098-1.254-.005-2.388.004-2.52.021m4.794 1.563c.29.109.596.415.705.705.08.214.081.29.081 5.454s-.001 5.24-.081 5.454c-.109.29-.415.596-.705.705-.209.078-.304.081-2.454.081-2.15 0-2.245-.003-2.454-.081a1.336 1.336 0 0 1-.705-.707c-.081-.216-.082-.265-.072-5.525L8.78 6.62l.087-.162c.157-.293.484-.573.773-.661.055-.016 1.112-.032 2.348-.034 2.166-.003 2.257 0 2.466.078M1.815 8.277a.8.8 0 0 0-.462.354l-.093.149v6.44l.093.149c.357.574 1.223.443 1.363-.207.059-.275.06-6.065.001-6.321a.747.747 0 0 0-.902-.564m20 0a.8.8 0 0 0-.462.354l-.093.149v6.44l.093.149c.357.574 1.223.443 1.363-.207.059-.275.06-6.065.001-6.321a.747.747 0 0 0-.902-.564m-17 1a.8.8 0 0 0-.462.354l-.093.149v4.44l.093.149c.357.574 1.223.443 1.363-.207.058-.271.059-4.069.001-4.321a.747.747 0 0 0-.902-.564m14 0a.8.8 0 0 0-.462.354l-.093.149v4.44l.093.149c.357.574 1.223.443 1.363-.207.058-.271.059-4.069.001-4.321a.747.747 0 0 0-.902-.564'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVibrateMode);
export default ForwardRef;
