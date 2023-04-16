import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeFilter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.7 10.316a.786.786 0 0 0-.46.743v.181l-.69.001c-.585.001-.714.012-.85.075a.745.745 0 0 0 .029 1.382c.114.048.305.062.83.062h.681v.181c0 .336.169.609.46.743.386.179.827-.004.998-.413.051-.122.062-.348.061-1.28-.001-1.014-.008-1.148-.075-1.291-.181-.392-.607-.558-.984-.384m2 1a.745.745 0 0 0 .029 1.382c.128.053.445.062 2.28.061 1.986-.001 2.142-.006 2.291-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.149-.069-.304-.074-2.3-.074-1.996 0-2.151.005-2.3.074m2 4a.734.734 0 0 0-.398.413c-.091.219-.091 2.323 0 2.542a.734.734 0 0 0 .398.413c.505.234 1.06-.155 1.06-.743v-.181h.681c.525 0 .716-.014.83-.062a.748.748 0 0 0 0-1.396c-.114-.048-.305-.062-.83-.062h-.681l-.001-.19c-.003-.582-.557-.966-1.059-.734m-6 1a.745.745 0 0 0 .029 1.382c.128.053.445.062 2.28.061 1.986-.001 2.142-.006 2.291-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.149-.069-.304-.074-2.3-.074-1.996 0-2.151.005-2.3.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeFilter);
export default ForwardRef;