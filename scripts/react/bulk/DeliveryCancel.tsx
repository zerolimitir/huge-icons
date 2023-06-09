import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDeliveryCancel = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14 12.998V19h6.277l.291-.093a2.037 2.037 0 0 0 1.324-1.257c.086-.228.087-.257.099-3.218.013-3.293.013-3.287-.234-3.751a2.43 2.43 0 0 0-.289-.412c-.315-.345-2.966-2.8-3.167-2.934a2.719 2.719 0 0 0-.441-.223c-.234-.087-.289-.09-2.05-.103L14 6.996v6.002M6.328 7.845c-.178.052-.433.316-.485.502-.105.378-.031.521.588 1.143l.508.51-.488.49c-.621.624-.712.828-.535 1.21a.734.734 0 0 0 .413.398c.369.154.567.062 1.18-.548l.488-.486.534.524c.494.486.547.527.721.553.276.041.452-.006.637-.173.266-.241.338-.528.209-.839-.036-.087-.263-.352-.549-.639L9.061 10l.508-.51c.279-.281.526-.561.549-.623a.84.84 0 0 0-.153-.801c-.172-.196-.567-.283-.832-.184-.062.023-.343.27-.623.549L8 8.939l-.51-.508c-.621-.619-.776-.697-1.162-.586m.332 8.66c-.958.148-1.804.886-2.076 1.812-.081.277-.083.936-.004 1.273.122.516.471 1.065.869 1.365.472.356.969.524 1.551.524.978 0 1.814-.518 2.237-1.385.25-.512.33-1.269.187-1.754-.245-.828-.928-1.517-1.744-1.757-.226-.067-.806-.111-1.02-.078'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDeliveryCancel);
export default ForwardRef;
