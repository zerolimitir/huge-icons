import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDestinationLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.442 2.044c-.936.144-1.675.662-2.058 1.442-.203.414-.28.676-.348 1.189-.144 1.075.229 2.116 1.241 3.463.417.557.671.802.98.947.677.316 1.454.126 1.96-.481.254-.305.726-.971.953-1.344.617-1.015.871-1.802.815-2.527C7.88 3.361 7.145 2.44 5.9 2.119c-.376-.096-1.082-.133-1.458-.075m1.07 2.103c.63.387.642 1.299.023 1.692a.998.998 0 0 1-1.394-.336c-.107-.174-.121-.232-.121-.5 0-.259.016-.33.111-.492a.955.955 0 0 1 .941-.496.836.836 0 0 1 .44.132m13.068-.052a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m-9.86 4.71c-.262.104-.451.395-.451.695 0 .227.07.389.237.547.157.149.296.193.604.193.524 0 .83-.272.83-.74 0-.474-.307-.742-.843-.737-.152.001-.322.02-.377.042m2.727.041c-.258.127-.387.346-.387.654 0 .311.13.529.39.655.251.122.849.122 1.1 0 .26-.126.39-.344.39-.655 0-.311-.13-.529-.39-.655-.253-.122-.855-.122-1.103.001m3 0c-.258.127-.387.346-.387.654 0 .315.13.529.399.659.153.075.236.087.499.075.282-.013.331-.027.468-.138.219-.177.305-.344.305-.59a.75.75 0 0 0-.464-.703c-.198-.075-.627-.053-.82.043m2.731 1.989c-.207.094-.486.411-.541.615a.75.75 0 0 0 .913.913c.204-.055.521-.334.615-.541.129-.285.06-.683-.151-.87a.802.802 0 0 0-.836-.117m-1.927 1.969c-.15.044-.57.42-.696.625-.102.164-.121.528-.037.691.144.278.368.413.686.413.277 0 .424-.083.731-.415.283-.305.347-.503.263-.807a.753.753 0 0 0-.947-.507M4.67 14.521c-.447.113-.84.441-1.043.871-.111.235-.126.309-.126.608s.015.373.126.608c.162.341.424.603.765.765.235.111.309.126.608.126s.373-.015.608-.126c.341-.162.603-.424.765-.765.111-.235.126-.309.126-.608s-.015-.373-.126-.608a1.529 1.529 0 0 0-1.279-.893 1.773 1.773 0 0 0-.424.022m8.43.448c-.233.062-.755.589-.819.827a.748.748 0 0 0 .923.923c.261-.07.765-.587.831-.851.141-.569-.362-1.052-.935-.899m-2.28 2.217a1.357 1.357 0 0 0-.504.514c-.273.589.29 1.223.906 1.019.187-.062.479-.326.581-.526.175-.342.053-.79-.266-.977-.195-.114-.53-.128-.717-.03'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDestinationLine);
export default ForwardRef;