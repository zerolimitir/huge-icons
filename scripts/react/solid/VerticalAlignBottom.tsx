import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVerticalAlignBottom = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.58 4.047c-.721.138-1.381.801-1.536 1.545C4.013 5.742 4 7.771 4 12.519v6.715l-1.113.013-1.113.013-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.226.063 20.212.063 20.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.113-.013L20 19.234v-3.715c0-2.558-.014-3.781-.044-3.927-.159-.762-.818-1.411-1.573-1.549-.311-.056-2.455-.056-2.766 0-.755.138-1.414.787-1.573 1.549-.03.146-.044 1.37-.044 3.93v3.718h-4v-6.718c0-4.75-.013-6.78-.044-6.93-.159-.762-.818-1.411-1.573-1.549-.291-.053-2.52-.05-2.803.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalAlignBottom);
export default ForwardRef;
