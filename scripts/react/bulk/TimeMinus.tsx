import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTimeMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 5.316a.734.734 0 0 0-.398.413c-.053.128-.062.447-.062 2.28v2.131l-.217.113c-.264.138-.657.538-.793.808-.24.473-.298 1.033-.155 1.493l.075.24-.878.873c-.483.48-.901.918-.929.973a.702.702 0 0 0-.043.549.773.773 0 0 0 .522.514c.17.051.219.051.396-.001.183-.053.284-.142 1.095-.955l.893-.897.24.075c.682.212 1.47-.003 1.987-.541.615-.64.743-1.522.337-2.323-.136-.27-.529-.67-.793-.808l-.217-.113L12.759 8c-.001-1.995-.006-2.151-.075-2.3-.181-.392-.607-.558-.984-.384m4 12a.745.745 0 0 0 .029 1.382c.13.054.535.062 3.188.062 2.068 0 3.105-.014 3.245-.044a.65.65 0 0 0 .358-.196c.409-.409.205-1.115-.358-1.236-.14-.03-1.176-.044-3.254-.043-2.878.001-3.057.005-3.208.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeMinus);
export default ForwardRef;
