import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDonation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.62 3.041c-.702.147-1.249.622-1.514 1.315-.085.222-.086.254-.086 3.144s.001 2.922.086 3.144c.226.59.659 1.025 1.244 1.248.229.088.24.088 3.15.088s2.921 0 3.15-.088a2.112 2.112 0 0 0 1.244-1.248c.085-.222.086-.254.086-3.144s-.001-2.922-.086-3.144a2.115 2.115 0 0 0-1.244-1.248c-.228-.086-.256-.087-3.05-.094-1.551-.004-2.892.008-2.98.027m4.16 2.275c.295.137.46.381.46.684 0 .303-.165.547-.46.684-.144.067-.274.074-1.28.074-.998 0-1.137-.008-1.28-.073-.207-.094-.409-.325-.443-.507-.069-.366.08-.678.401-.839.197-.098.204-.099 1.32-.098 1.007.001 1.138.008 1.282.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDonation);
export default ForwardRef;
