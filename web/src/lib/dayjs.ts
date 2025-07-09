import lib from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-Br';

lib.locale('pt-Br');
lib.extend(relativeTime);

export const dayjs = lib;
