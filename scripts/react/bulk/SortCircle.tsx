import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSortCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.34 3.345c-.359.086-.85.342-1.118.582-.13.117-.609.63-1.062 1.139-.964 1.082-1.026 1.198-.845 1.594.195.43.726.596 1.085.34.068-.048.48-.487.915-.974.435-.487.822-.911.858-.941.063-.051.067.413.067 6.915s-.004 6.966-.067 6.915c-.036-.03-.423-.454-.858-.941-.435-.487-.849-.927-.92-.977a.736.736 0 0 0-.703-.043c-.38.194-.529.575-.379.969.05.129 1.59 1.865 1.909 2.15.455.407 1.125.653 1.778.653s1.323-.246 1.778-.653c.319-.285 1.859-2.021 1.909-2.15.15-.394.001-.775-.379-.969a.736.736 0 0 0-.703.043c-.071.05-.485.49-.92.977-.435.487-.822.911-.858.941-.063.051-.067-.413-.067-6.915s.004-6.966.067-6.915c.036.03.423.454.858.941.435.487.849.927.918.976.153.109.452.146.65.08.186-.061.411-.314.468-.527.046-.171.038-.288-.034-.478-.05-.13-1.592-1.867-1.906-2.146a3.023 3.023 0 0 0-1.141-.589c-.325-.076-.98-.075-1.3.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSortCircle);
export default ForwardRef;
