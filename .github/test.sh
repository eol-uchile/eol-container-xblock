#!/bin/dash

pip install -e /openedx/requirements/eolcontainer

cd /openedx/requirements/eolcontainer/eolcontainer
cp /openedx/edx-platform/setup.cfg .
mkdir test_root
cd test_root/
ln -s /openedx/staticfiles .

cd /openedx/requirements/eolcontainer/eolcontainer

DJANGO_SETTINGS_MODULE=lms.envs.test EDXAPP_TEST_MONGO_HOST=mongodb pytest tests.py

rm -rf test_root
